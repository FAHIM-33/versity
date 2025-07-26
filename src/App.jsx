import Devider from "./Devider"
import Table from "./Table"

function App() {

  const auditData = [
    {
        clauseNo: "1.1",
        checkpoint: "Are the standard procedures, work instructions, and flow charts clearly visible and well communicated to all personnel?",
        pointsPossible: 10,
        pointsEarned: 8,
        nonConformitySummary: "",
        red:false,
    },
    {
        clauseNo: "1.2",
        checkpoint: "Are the quality policy and product safety policy effectively communicated to all personnel?",
        pointsPossible: 15,
        pointsEarned: 12,
        nonConformitySummary: "",
        red:false,
    },
    {
        clauseNo: "1.3",
        checkpoint: "Are the quality objectives effectively communicated to all personnel?",
        pointsPossible: 10,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:true,
    },
    {
        clauseNo: "1.4",
        checkpoint: "Are the personnel adequately trained and competent for their roles? Are they well aware of their job descriptions?",
        pointsPossible: 15,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:false,
    },
    {
        clauseNo: "1.5",
        checkpoint: "Is the work environment/housekeeping well organized? Are materials kept away from walls (50 cm from exterior walls) and windows (150 cm from windows and doors)?",
        pointsPossible: 10,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:false,
    },
    {
        clauseNo: "1.6",
        checkpoint: "Are the sharp tools control procedures effectively functioning at the workstation?",
        pointsPossible: 10,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:false,
    },
    {
        clauseNo: "1.7",
        checkpoint: "Are workplaces free from the following items: staplers, metal paper clips, pins, and other small metal objects?",
        pointsPossible: 10,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:true,
    },
    {
        clauseNo: "1.8",
        checkpoint: "Are the non-conformity management procedures effectively functioning at the workstations?",
        pointsPossible: 15,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:true,
    },
    {
        clauseNo: "1.9",
        checkpoint: "Is lighting adequate (1000 lux)?",
        pointsPossible: 10,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:false,
    },
    {
        clauseNo: "1.10",
        checkpoint: "Is the factory able to maintain the walls, windows, flooring, and ceiling? Are there no signs of water leakage or moldy marks?",
        pointsPossible: 15,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:false,
    },
    {
        clauseNo: "1.11",
        checkpoint: "Are the equipment regularly calibrated and maintained?",
        pointsPossible: 10,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:false,
    },
    {
        clauseNo: "1.12",
        checkpoint: "Is the metal detection machine calibrated by a third party, stating 1.0 / 1.2 / 1.5 mm sensitivity testing and available?",
        pointsPossible: 15,
        pointsEarned: 0,
        nonConformitySummary: "",
        red:false,
    },
];



  return (
    <>
      <div className=''>
        <div className="flex justify-between">
          <img src="/logo.png" alt="" />
          <div>
            <h1 className="bg-gray-400 p-4 text-2xl font-semibold">Daily (QSPS) Quality System and Product Safety  Audit Report</h1>
          </div>

        </div>

        <section className="flex justify-between my-8">
          <div>
            <div>
              <label htmlFor="">Audit scope:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Date of audit:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Auditor:</label>
              <input type="text" />
            </div>
          </div>
          <div className="text-2xl font-semibold grow">
            <label htmlFor="">Auditor:</label>
            <p>19.14%</p>
          </div>
          <div>
            <img src="/color.png" className=" h-32" alt="" />
          </div>
        </section>


        <section>
          <Devider percentage={66} title="1: general Quality management system and product safety"></Devider>
          <Table data={auditData} />
          <Devider percentage={66} title="1: general Quality management system and product safety"></Devider>
          <Table data={auditData} />
          <Devider percentage={66} title="1: general Quality management system and product safety"></Devider>
          <Table data={auditData} />
          <Devider percentage={66} title="1: general Quality management system and product safety"></Devider>
          <Table data={auditData} />
        </section>

      </div>
    </>
  )
}

export default App
