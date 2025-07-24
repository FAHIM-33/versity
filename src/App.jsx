
function App() {


  return (
    <>
      <div className=''>
        <div className="flex justify-between">
          <img src="/logo.png" alt="" />
          <div>
            <h1 className="bg-gray-400 p-4 text-2xl font-semibold">Daily (QSPS) Quality System and Product Safety  Audit Report</h1>
          </div>

        </div>
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
      </div>
    </>
  )
}

export default App
