import '../Resume.css'

function Sidebar() {

    const sidebarMenu = ['Education','Skills','Experience',
    'Assitantships','Certifications','Projects']

    return (
        <div className='sidebar'>

            <ul className='sidebar-list'>
                
                {sidebarMenu.map(val => {
                    return (
                        <li id={val} key={val} className='row-item'>{val}</li>
                    )
                })}
            </ul>
            
            
        </div>
    )
}

export default Sidebar