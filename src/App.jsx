import axios from "axios";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useEffect, useState } from "react";
import Devider from "./Devider";
import { baseURL } from "./services/api";
import Table from "./Table";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [auditDetails, setAuditDetails] = useState({
    scope: "",
    date: "",
    auditor: ""
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/audit/get-all-audits`)
      .then((res) => {
        if (res?.data?.success) {
          setData(res?.data?.data);
          setLoading(false);
        } else {
          alert("Failed to fetch data");
          setLoading(false);
        }
      })
      .catch((err) => {
        alert("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  // Calculate overall score
  const calculateOverallScore = () => {
    if (!data || Object.keys(data).length === 0) return 0;
    
    let totalPointsPossible = 0;
    let totalPointsEarned = 0;
    
    Object.values(data).forEach(sectionData => {
      if (Array.isArray(sectionData)) {
        sectionData.forEach(item => {
          totalPointsPossible += item.pointsPossible || 0;
          totalPointsEarned += item.pointsEarned || 0;
        });
      }
    });
    
    return totalPointsPossible > 0 ? ((totalPointsEarned / totalPointsPossible) * 100).toFixed(2) : 0;
  };

  // Calculate section percentage
  const calculateSectionPercentage = (sectionData) => {
    if (!Array.isArray(sectionData) || sectionData.length === 0) return 0;
    
    let totalPointsPossible = 0;
    let totalPointsEarned = 0;
    
    sectionData.forEach(item => {
      totalPointsPossible += item.pointsPossible || 0;
      totalPointsEarned += item.pointsEarned || 0;
    });
    
    return totalPointsPossible > 0 ? ((totalPointsEarned / totalPointsPossible) * 100).toFixed(2) : 0;
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const overallScore = calculateOverallScore();

    // Add Report Title
    doc.setFontSize(16);
    doc.text("Daily (QSPS) Quality System and Product Safety Audit Report", pageWidth / 2, 20, { align: "center" });

    // Add Audit Details
    doc.setFontSize(12);
    doc.text(`Audit Scope: ${auditDetails.scope || "[Enter Scope]"}`, 14, 40);
    doc.text(`Date of Audit: ${auditDetails.date || "[Enter Date]"}`, 14, 50);
    doc.text(`Auditor: ${auditDetails.auditor || "[Enter Auditor]"}`, 14, 60);
    doc.text(`Overall Score: ${overallScore}%`, pageWidth - 50, 40);

    let yOffset = 80;

    // Define table sections with dynamic percentages
    const sections = [
      { title: "I: General Quality Management System and Product Safety", dataKey: "auditData" },
      { title: "V: Sewing Section", dataKey: "sewingData" },
      { title: "VI: Ironing Section", dataKey: "ironingData" },
      { title: "VII: Final Quality Checking", dataKey: "qualityData" },
      { title: "VIII: Folding/Packing Section", dataKey: "packingData" },
      { title: "IX: Metal Detection & Product Safety", dataKey: "metalDetectionData" },
    ];

    sections.forEach((section) => {
      const sectionData = data[section.dataKey];
      const sectionPercentage = calculateSectionPercentage(sectionData);
      
      // Add Section Title and Percentage
      doc.setFontSize(14);
      doc.text(`${section.title} (${sectionPercentage}%)`, 14, yOffset);
      yOffset += 10;

      // Add Table
      if (sectionData && Array.isArray(sectionData) && sectionData.length > 0) {
        const tableData = sectionData.map((item) => [
          item.clauseNo || "",
          item.checkpoint || "",
          item.pointsEarned || 0,
          item.pointsPossible || 0,
          item.nonConformitySummary || "",
        ]);

        autoTable(doc, {
          startY: yOffset,
          head: [["Clause No.", "Checkpoint", "Points Earned", "Points Possible", "Non-Conformity Summary"]],
          body: tableData,
          theme: "grid",
          styles: { fontSize: 8 },
          headStyles: { fillColor: [100, 100, 100] },
          margin: { left: 14, right: 14 },
          columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 60 },
            2: { cellWidth: 25 },
            3: { cellWidth: 25 },
            4: { cellWidth: 40 }
          }
        });

        yOffset = doc.lastAutoTable.finalY + 20;
      } else {
        doc.setFontSize(10);
        doc.text("No data available for this section.", 14, yOffset);
        yOffset += 20;
      }
    });

    // Save the PDF
    doc.save("QSPS_Audit_Report.pdf");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <img src="/logo.png" alt="" className="" />
          <div>
            <h1 className="bg-gray-400 p-4 text-2xl font-semibold">
              Daily (QSPS) Quality System and Product Safety Audit Report
            </h1>
          </div>
        </div>

        <section className="flex flex-col-reverse lg:flex-row justify-between my-8">
          <div>
            <div>
              <label htmlFor="">Audit scope: </label>
              <input 
                type="text" 
                value={auditDetails.scope}
                onChange={(e) => setAuditDetails(prev => ({ ...prev, scope: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="">Date of audit: </label>
              <input 
                type="text" 
                value={auditDetails.date}
                onChange={(e) => setAuditDetails(prev => ({ ...prev, date: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="">Auditor: </label>
              <input 
                type="text" 
                value={auditDetails.auditor}
                onChange={(e) => setAuditDetails(prev => ({ ...prev, auditor: e.target.value }))}
              />
            </div>
          </div>
          <div className="text-2xl font-semibold grow">
            <label htmlFor="">Overall Score:</label>
            <p>{calculateOverallScore()}%</p>
          </div>
          <div>
            <img src="/color.png" className=" h-32" alt="" />
          </div>
        </section>

        <div className="mb-8">
          <button
            onClick={exportToPDF}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Export to PDF
          </button>
        </div>

        <section>
          <Devider
            percentage={calculateSectionPercentage(data?.auditData)}
            title="I: General Quality Management System and Product Safety"
          ></Devider>
          <Table data={data?.auditData} setData={setData} dataKey="auditData" />
          <Devider percentage={calculateSectionPercentage(data?.sewingData)} title="V: Sewing Section"></Devider>
          <Table
            data={data?.sewingData}
            setData={setData}
            dataKey="sewingData"
          />
          <Devider
            percentage={calculateSectionPercentage(data?.ironingData)}
            title="VI: Ironing Section"
          ></Devider>
          <Table
            data={data?.ironingData}
            setData={setData}
            dataKey="ironingData"
          />
          <Devider
            percentage={calculateSectionPercentage(data?.qualityData)}
            title="VII: Final Quality Checking"
          ></Devider>
          <Table
            data={data?.qualityData}
            setData={setData}
            dataKey="qualityData"
          />
          <Devider
            percentage={calculateSectionPercentage(data?.packingData)}
            title="VIII: Folding/Packing Section"
          ></Devider>
          <Table
            data={data?.packingData}
            setData={setData}
            dataKey="packingData"
          />
          <Devider
            percentage={calculateSectionPercentage(data?.metalDetectionData)}
            title="IX: Metal Detection & Product Safety"
          ></Devider>
          <Table
            data={data?.metalDetectionData}
            setData={setData}
            dataKey="metalDetectionData"
          />
        </section>
      </div>
    </>
  );
}

export default App;