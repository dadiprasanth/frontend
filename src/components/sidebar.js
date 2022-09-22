const Sidebar=()=>{
    return(
        <div className="sidebar">
            <div className="sidebar-logo"><i class="fa-solid fa-city"><span>Estate</span></i></div>
            <ul id="sidebarlist">
                <li><i class="fa-solid fa-house-chimney"></i> Property</li>
                <li><i class="fa-solid fa-bell"></i> Assistance</li>
                <li><i class="fa-solid fa-download"></i> Received Intrest</li>
                <li><i class="fa-solid fa-upload"></i> Sent Intrest</li>
                <li><i class="fa-solid fa-eye"></i> Property Views</li>
                <li><i class="fa-solid fa-tag"></i> Tariff Plan</li>
            </ul>
        </div>
    )
}
export default Sidebar;