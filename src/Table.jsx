import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "./services/api";
import Toggle from "./Toggle";

const Table = ({ data, setData, dataKey }) => {
    const [loadingRow, setLoadingRow] = useState(null);
    const [summaryEdits, setSummaryEdits] = useState({});
    const [previewImg, setPreviewImg] = useState(null);


    const updateLocalData = (updatedRow) => {
        setData(prevData => ({
            ...prevData,
            [dataKey]: prevData[dataKey].map(row =>
                row._id === updatedRow._id ? updatedRow : row
            )
        }));
    };

    const handleToggle = async (row) => {
        const newValue = row.pointsEarned === 0 ? 1 : 0;
        const updatedRow = { ...row, pointsEarned: newValue };

        // Optimistic update
        updateLocalData(updatedRow);

        setLoadingRow(row._id);
        try {
            await axios.patch(`${baseURL}/audit/set-points-earned/${row._id}`, {
                value: newValue,
            });
        } catch (e) {
            // Revert on error
            updateLocalData(row);
            alert("Failed to update toggle");
        } finally {
            setLoadingRow(null);
        }
    };

    const handleSummaryChange = (id, value) => {
        setSummaryEdits((prev) => ({ ...prev, [id]: value }));
    };

    const handleSummaryBlur = async (row) => {
        if (row.nonConformitySummary === summaryEdits[row._id] || summaryEdits[row._id] === undefined) return;

        const newSummary = summaryEdits[row._id];
        const updatedRow = { ...row, nonConformitySummary: newSummary };

        // Optimistic update
        updateLocalData(updatedRow);

        setLoadingRow(row._id);
        try {
            await axios.patch(`${baseURL}/audit/update-non-conformity-summary/${row._id}`, {
                summary: newSummary,
            });
            // Clear the edit state
            setSummaryEdits(prev => {
                const newState = { ...prev };
                delete newState[row._id];
                return newState;
            });
        } catch (e) {
            // Revert on error
            updateLocalData(row);
            alert("Failed to update summary");
        } finally {
            setLoadingRow(null);
        }
    };

    const handleImageChange = async (id, file) => {
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        setLoadingRow(id);
        try {
            const response = await axios.post(`${baseURL}/audit/upload-image/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                const updatedRow = { ...data.find(row => row._id === id), img: response.data.data.img };
                updateLocalData(updatedRow);
            }
        } catch (e) {
            alert("Failed to upload image");
        } finally {
            setLoadingRow(null);
        }
    };

    return (
        <div>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4">Clause No</th>
                        <th className="border border-gray-300 px-4">Checkpoint</th>
                        <th className="border border-gray-300 px-4">Points Possible</th>
                        <th className="border border-gray-300 px-4">Points Earned</th>
                        <th className="border border-gray-300 px-4">Non-Conformity Summary</th>
                        <th className="border border-gray-300 px-4">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row) => (
                        <tr key={row?._id}>
                            <td className={`${row.red ? "text-red-500" : ""} text-center py-1 border border-gray-300 px-4 w-20`}>{row.clauseNo}</td>
                            <td className={`${row.red ? "text-red-500" : ""} border border-gray-300 px-4 max-w-[30vw] whitespace-pre-wrap`}>
                                {row.checkpoint.split("\n").map((line, idx) => (
                                    <span key={idx}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </td>
                            <td className="border border-gray-300 px-4 text-center py-1 w-20">{row.pointsPossible}</td>
                            <td className="border border-gray-300 px-4 text-center py-1 w-20">
                                <div className="flex items-center justify-center">
                                    <Toggle
                                        enabled={row.pointsEarned === 0}
                                        setEnabled={() => handleToggle(row)}
                                        disabled={loadingRow === row._id}
                                    />
                                    {loadingRow === row._id && (
                                        <span className="ml-2 text-xs text-gray-500">...</span>
                                    )}
                                </div>
                            </td>
                            <td className="border border-gray-300 px-4">
                                <input
                                    type="text"
                                    className="w-full"
                                    value={
                                        summaryEdits[row._id] !== undefined
                                            ? summaryEdits[row._id]
                                            : row.nonConformitySummary || ""
                                    }
                                    onChange={(e) => handleSummaryChange(row._id, e.target.value)}
                                    onBlur={() => handleSummaryBlur(row)}
                                    disabled={loadingRow === row._id}
                                />
                            </td>
                            <td className="border border-gray-300 px-4 text-center py-2">
                                {row?.img ? (
                                    <div className="relative">
                                        <img
                                            src={`${baseURL.replace('/api/v1', '')}${row.img}`}
                                            alt=""
                                            className="w-16 h-16 object-cover rounded border cursor-pointer"
                                            onClick={() => setPreviewImg(`${baseURL.replace('/api/v1', '')}${row.img}`)}
                                        />

                                        {loadingRow === row._id && (
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                                                <span className="text-white text-xs">...</span>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 bg-gray-200 rounded border flex items-center justify-center relative">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange(row._id, e.target.files[0])}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            disabled={loadingRow === row._id}
                                        />
                                        <span className="text-gray-500 text-xs">+</span>
                                        {loadingRow === row._id && (
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                                                <span className="text-white text-xs">...</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {previewImg && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
                    onClick={() => setPreviewImg(null)}
                >
                    <img
                        src={previewImg}
                        alt="Preview"
                        className="max-w-[90vw] max-h-[90vh] rounded shadow-lg "
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                    />
                    <button
                        onClick={() => setPreviewImg(null)}
                        className="absolute top-4 right-4 text-white text-4xl font-bold"
                    >
                        ×
                    </button>
                </div>
            )}

        </div>
    );
};

export default Table;
