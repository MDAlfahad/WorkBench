
import BackButton from '../../../components/buttons/BackButton'
import GlobalButton from '../../../components/buttons/GlobalButton'

const IssueResultPage = () => {

  return (
    <div className='w-full h-[90vh] flex flex-col items-center justify-center '>
        <h1 className='w-[800px] text-center text-2xl mb-6 bg-white px-4 py-2 rounded-lg'>Issue result's</h1>
        <form
              action="sumbit"
              className="flex flex-col gap-2 w-[800px] max-w[900px] bg-white px-6 py-4 rounded-2xl"
            >
              <div className="w-full flex items-center gap-4">
                <div className="w-full flex flex-col">
                  <label htmlFor="name">Student name</label>
                  <input
                    type="text"
                    placeholder="example"
                    className="p-2 border border-slate-200 rounded-lg outline-primary"
                  />
                </div>
                <div className=" w-full flex flex-col">
                  <label htmlFor="fathersName"> Father's name</label>
                  <input
                    type="text"
                    placeholder="example"
                    className="p-2 border border-slate-200 rounded-lg outline-primary"
                  />
                </div>
              </div>
              <label htmlFor="rollNo"> Roll number</label>
              <input
                type="text"
                placeholder="Roll no"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />
              <label htmlFor="mobilno"> mobile number</label>
              <input
                type="number"
                placeholder="+91-XXXX-XXXX-XXX"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />
              <label htmlFor="email"> email address</label>
              <input
                type="email"
                placeholder="example@.com"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />
              <div className="w-full flex items-center gap-4">
                <div className="w-full flex flex-col">
                  <label htmlFor="dOB"> Date of Birth</label>
                  <input
                    type="text"
                    placeholder="10/01/2000"
                    className="p-2 border border-slate-200 rounded-lg outline-primary"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label htmlFor="bloodGroup">Blood group</label>
                  <input
                    type="text"
                    placeholder="O-"
                    className="p-2 border border-slate-200 rounded-lg outline-primary"
                  />
                </div>
              </div>
              <label htmlFor="regNumber"> regestration Number</label>
              <input
                type="text"
                placeholder="A23232"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />

              <label htmlFor="pendingFee"> Pending fee</label>
              <input
                type="text"
                placeholder="pending fee"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />
              <GlobalButton text="proceed" />
              <BackButton text="Back"  />
            </form>
    </div>
  )
}

export default IssueResultPage