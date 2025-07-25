
const Table = ({ data }) => {
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
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className={`${row.red?"text-red-500":""} text-center py-1 border border-gray-300 px-4 w-20`}>{row.clauseNo}</td>
                            <td className={` ${row.red?"text-red-500":""} border border-gray-300 px-4 max-w-[30vw]`}>{row.checkpoint}</td>
                            <td className="border border-gray-300 px-4 text-center py-1 w-20">{row.pointsPossible}</td>
                            <td className="border border-gray-300 px-4 text-center py-1 w-20">{row.pointsEarned}</td>
                            <td className="border border-gray-300 px-4">
                                <input 
                                    type="text" 
                                    className="w-full" 
                                    value={row.nonConformitySummary} 
                                    onChange={(e) => {
                                        // Handle input change if needed
                                    }} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
