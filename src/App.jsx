import Devider from "./Devider"
import Table from "./Table"

function App() {

  const auditData = [
    {
      clauseNo: "1.1",
      checkpoint: "Are the Standard procedure/ Work Instructions/Flow Chart clearly Visible and well communicated for all the process?",
      pointsPossible: 10,
      pointsEarned: 8,
      nonConformitySummary: ""
    },
    {
      clauseNo: "1.2",
      checkpoint: "Checkpoint Description 2",
      pointsPossible: 15,
      pointsEarned: 12,
      nonConformitySummary: "Summary of Non-Conformity 2"
    },
    // Add more objects as needed
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
        </section>

      </div>
    </>
  )
}

export default App
