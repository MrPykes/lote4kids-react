import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarFindLibrary">
          <h4 className="sidebarFindLibraryTitle">Find Your Library or School:</h4>
          <input className="sidebarFindLibraryText" placeholder="Start typing here" />
          <button className="sidebarFindLibraryButton">GO</button>
        </div>
        <span className="sibarCantFindLibrary">Can't find your library or school?</span>
        <span className="sidebarRequestTrial">Request a trial</span>
        <div className="sidebarImgContainer">
          <img className="sidebarImg" src="owl.gif" alt="" />
        </div>
        <p className="sidebarContent">LOTE4Kids is our new database of digital books in World Languages, created for children to enjoy books and learn language through storytelling. The platform provides over 3000+ digital books in 65+ languages together with English translations. New books and languages are released each month, so stay tuned!</p>
        <div className="sidebarFlags">
          <div className="sidebarFlagsWrapper">
            <div className="sidebarFlagsContainer">
              <div className="sidebarFlagsTop">
                  <img className="sidebarFlagsImg"src="flags/south-africa.svg" alt="" />
              </div>
              <div className="sidebarFlagsBottom">
                  <span className='sidebarFlagsName'>Afrikans</span>
                  <span className='sidebarFlagsDesc'>Afrikans</span>
              </div>
            </div>
            <div className="sidebarFlagsContainer">
              <div className="sidebarFlagsTop">
                  <img className="sidebarFlagsImg"src="flags/south-africa.svg" alt="" />
              </div>
              <div className="sidebarFlagsBottom">
                  <span className='sidebarFlagsName'>Afrikans</span>
                  <span className='sidebarFlagsDesc'>Afrikans</span>
              </div>
            </div>
            <div className="sidebarFlagsContainer">
              <div className="sidebarFlagsTop">
                  <img className="sidebarFlagsImg"src="flags/south-africa.svg" alt="" />
              </div>
              <div className="sidebarFlagsBottom">
                  <span className='sidebarFlagsName'>Afrikans</span>
                  <span className='sidebarFlagsDesc'>Afrikans</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="sidebarHr"/>
        <div className="sidebarFeedback">
          <h4 className="sidebarFeedbackTitle">Feedback</h4>
          <div className="sidebarForm">
            <div className="sidebarFormGroup">
              <label htmlFor="sidebarFeedbackName">Name *</label>
              <input className="sidebarFeedbackName" type="text" />
            </div>
            <div className="sidebarFormGroup">
              <label htmlFor="sidebarFeedbackEmail">Email *</label>
              <input className="sidebarFeedbackEmail" type="text" />
            </div>
            <div className="sidebarFormGroup">
              <label htmlFor="sidebarFeedbackText">Feedback *</label>
              <textarea className="sidebarFeedbackText" type="text" />
            </div>
            <div className="sidebarFormGroup">
              <span>Are you enjoying these stories? We'd love to hear your feadback and suggestions.</span>
            </div>
            <div className="sidebarFormGroup">
              <button className="sidebarFeedbackButton">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
