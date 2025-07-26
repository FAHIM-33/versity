import Devider from "./Devider"
import Table from "./Table"

function App() {

  const auditData = [
    {
      clauseNo: "1.1",
      checkpoint: "Are the standard procedures, work instructions, and flow charts clearly visible and well communicated to all personnel?",
      pointsPossible: 1,
      pointsEarned: 8,
      nonConformitySummary: "",
      red: false,
    },
    {
      clauseNo: "1.2",
      checkpoint: "Are the quality policy and product safety policy effectively communicated to all personnel?",
      pointsPossible: 1,
      pointsEarned: 12,
      nonConformitySummary: "",
      red: false,
    },
    {
      clauseNo: "1.3",
      checkpoint: "Are the quality objectives effectively communicated to all personnel?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: true,
    },
    {
      clauseNo: "1.4",
      checkpoint: "Are the personnel adequately trained and competent for their roles? Are they well aware of their job descriptions?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: false,
    },
    {
      clauseNo: "1.5",
      checkpoint: "Is the work environment/housekeeping well organized? Are materials kept away from walls (50 cm from exterior walls) and windows (150 cm from windows and doors)?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: false,
    },
    {
      clauseNo: "1.6",
      checkpoint: "Are the sharp tools control procedures effectively functioning at the workstation?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: false,
    },
    {
      clauseNo: "1.7",
      checkpoint: "Are workplaces free from the following items: staplers, metal paper clips, pins, and other small metal objects?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: true,
    },
    {
      clauseNo: "1.8",
      checkpoint: "Are the non-conformity management procedures effectively functioning at the workstations?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: true,
    },
    {
      clauseNo: "1.9",
      checkpoint: "Is lighting adequate (1000 lux)?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: false,
    },
    {
      clauseNo: "1.10",
      checkpoint: "Is the factory able to maintain the walls, windows, flooring, and ceiling? Are there no signs of water leakage or moldy marks?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: false,
    },
    {
      clauseNo: "1.11",
      checkpoint: "Are the equipment regularly calibrated and maintained?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: false,
    },
    {
      clauseNo: "1.12",
      checkpoint: "Is the metal detection machine calibrated by a third party, stating 1.0 / 1.2 / 1.5 mm sensitivity testing and available?",
      pointsPossible: 1,
      pointsEarned: 0,
      nonConformitySummary: "",
      red: false,
    },
  ];

 const sewing = [
  {
    clauseNo: "5.1",
    checkpoint: "Are cut parts stored with proper documentation and traceability?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.2",
    checkpoint: "Are printed/embroidered panels received and inspected?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.3",
    checkpoint: "Are inputs placed style-wise, color-wise, and size-wise?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.4",
    checkpoint: "Are cut panels verified using TMB check with grading pattern?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.5",
    checkpoint: "Are trims and accessories checked against approved trim card and BOM?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.6",
    checkpoint: "Has a risk assessment been conducted before starting the size set?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.7",
    checkpoint: "Is the before-wash measurement checked by the Quality Officer?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.8",
    checkpoint: "Are approved mock-up samples available at each workstation?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.9",
    checkpoint: "Does the Roving QC verify critical operations hourly and general operations every two hours?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.10",
    checkpoint: "Are 7 garments randomly inspected for workmanship and 3 for critical measurements?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.11",
    checkpoint: "Are corrective actions verified and documented before changing TLS status RED to Yellow ?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.12",
    checkpoint: "Are all red card responses documented and resolved collaboratively?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.13",
    checkpoint: "Individual Machine Stop: Is the machine stopped immediately upon red card without email?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.14",
    checkpoint: "Whole Line Stop: Is production halted for critical issues (e.g., wrong print, fabric mismatch)?  Is an email sent to management before stopping the entire line?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.15",
    checkpoint: "Is the Roving QC Inspection Report updated, analyzed and summarized end of day with Top defects ?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.16",
    checkpoint: "Are tech packs, trim cards, measurement charts, and artwork visibly posted or filed?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.17",
    checkpoint: "Is the first output garment inspected and reported?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.18",
    checkpoint: "Are garments inspected clockwise and anticlockwise?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.19",
    checkpoint: "Is shading compared between front/back and body/sleeve?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.20",
    checkpoint: "Are 3 garments measured every 2 hours across all processes?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.21",
    checkpoint: "Are defective garments separated in a designated box? Is an hourly inspection report prepared and maintained?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.22",
    checkpoint: "Is Neck Stretch 100% of kids’ garments tested with zero tolerance?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.23",
    checkpoint: "Is the heat transfer machine and surrounding area clean and organized?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.24",
    checkpoint: "Is the machine calibrated every 4 hours using a thermometer or thermal paper?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.25",
    checkpoint: "Is the data sheet from the supplier available and followed?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.26",
    checkpoint: "Are time, temperature, and pressure parameters set as per the requirement?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.27",
    checkpoint: "Are 10 garments randomly checked after machine setup?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.28",
    checkpoint: "Is bond strength testing performed as per buyer requirements?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.29",
    checkpoint: "Are washed garments hung and verified before finishing?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.30",
    checkpoint: "Is the pull test machine in good condition (On/Off switch, pressure indicator)?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.31",
    checkpoint: "Is the machine alignment correct?  Is the hook adapter properly adjusted?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.32",
    checkpoint: "Is the machine calibrated daily using a 6.82 kg weight bar?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.33",
    checkpoint: "Is pull testing done every 2 hours?  Are results recorded and retained as per customer guidelines?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.34",
    checkpoint: "Is button thickness with fabric checked as per data sheet?  Is pinch setting verified hourly using a digital slide caliper?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.35",
    checkpoint: "Is a pull test conducted after pinch setting verification?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.36",
    checkpoint: "Are the rejected goods segrigated , locked with accurate data and reviewed properly?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.37",
    checkpoint: "Availability of Machine Maintenance Report Per Sewing Machine",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.38",
    checkpoint: "Are the Needle control procedure effectively funtioning at the workstations?\n- Idle machines are identified with label \n- No spare needle at workstation \n-No Foreign Needle at workstation\n-New needle are withdrawn with application form\n-Missing needles are carried out all the criteria and resume with application form",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: true,
  },
  {
    clauseNo: "5.39",
    checkpoint: "Accurate Needle Inventory Control System In Place (Data Against Physical Stock) And Internal Storage Time Policy For Broken / Damages Needle",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.40",
    checkpoint: "Are all sewing area clean, tidy and free from excess fabric scrapes, threads or personal items?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.41",
    checkpoint: "Are all sewing machine guards in place and good condition?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.42",
    checkpoint: "Are all measuring devices (e.g. scale, thermometer, hygrometer, weight scale, M/D machine, pull test machine, heat seal machine etc.) within calibration date?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.43",
    checkpoint: "Are sharp tools (scissor, cutter, screw driver, gimlet, tape dispenser, tag gun etc.) attached to the work station by cotton drawstring or kept in a designated and secured box when not in use?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.44",
    checkpoint: "Are only authorized and necessary sharp tools present on the sewing floor?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.45",
    checkpoint: "Are correct SPI/SPC maintained at the process?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.46",
    checkpoint: "Are all sewing machine cleaned and oil level accurate?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.47",
    checkpoint: "Are all sharp tools returned end of the day?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.48",
    checkpoint: "Branded materials issued, stock and retrurned quantity are accurate with adeqaute documents are in place?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.49",
    checkpoint: "All branded materials are kept into the locked box?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.50",
    checkpoint: "Are excess items/label returned to the store with proper documentation?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.51",
    checkpoint: "A proper inventory system maintained for all the incoming and out going sharp tools?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "5.52",
    checkpoint: "Are there identified broken or broken edge sharp tools used at the work station?",
    pointsPossible: 1,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
];

const pressing = [
  {
    clauseNo: "6.1",
    checkpoint: "Availability Of Pressing Instruction (Include but not limited to no lustering marks, no pressing marks/impression at the back body caused by zipper/embellishment, temperature aligned to care label, etc)",
    pointsPossible: 10,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "6.2",
    checkpoint: "Availability of approved pressing sample (with authorized signature)",
    pointsPossible: 10,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "6.3",
    checkpoint: "Implementing a presentable cover system - cover changed with records",
    pointsPossible: 10,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "6.4",
    checkpoint: "Clear separation of product for pressing & pressed (hanged or folded properly)",
    pointsPossible: 10,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "6.5",
    checkpoint: "Implementing random moisture content checking by using a calibrated moisture meter with record",
    pointsPossible: 10,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  },
  {
    clauseNo: "6.6",
    checkpoint: "Availability of humidity control room (in case moisture content is out of standard)",
    pointsPossible: 10,
    pointsEarned: 0,
    nonConformitySummary: "",
    red: false,
  }
];


  return (
    <>
      <div className='max-w-7xl mx-auto px-4'>
        <div className="flex justify-between">
          <img src="/logo.png" alt="" />
          <div>
            <h1 className="bg-gray-400 p-4 text-2xl font-semibold">Daily (QSPS) Quality System and Product Safety  Audit Report</h1>
          </div>

        </div>

        <section className="flex justify-between my-8">
          <div>
            <div>
              <label htmlFor="">Audit scope: </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Date of audit: </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Auditor: </label>
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
          <Devider percentage={66.67} title="I: general Quality management system and product safety"></Devider>
          <Table data={auditData} />
          <Devider percentage={19.23} title="V: Sewing Section"></Devider>
          <Table data={sewing} />
          <Devider percentage={0.00} title="VI: Ironing Section"></Devider>
          <Table data={pressing} />
          <Devider percentage={66} title="1: general Quality management system and product safety"></Devider>
          <Table data={auditData} />
        </section>

      </div>
    </>
  )
}

export default App
