const General=(props)=>{
    return(
        <form>
            <div>
            <label >Name</label><br></br>
            <input type="text" placeholder="Owner" value={props.form.name} onChange={(e)=>props.setform({...props.form,name:e.target.value})}/>
            </div>
            <div>
            <label >Mobile</label><br></br>
            <input type="text" placeholder="Enter Mobile Number" value={props.form.mobile} onChange={(e)=>props.setform({...props.form,mobile:e.target.value})}/>
            </div>
            <div>
            <label >Posted By</label><br></br>
            <input type="text" placeholder="Posted By " value={props.form.postedBy} onChange={(e)=>props.setform({...props.form,postedBy:e.target.value})}/>
            </div>
            <div>
            <label >Sale Type</label><br></br>
            <input type="text" placeholder="Please Select " value={props.form.saleType} onChange={(e)=>props.setform({...props.form,saleType:e.target.value})}/>
            </div>
            <div>
            <label >Featured Package</label><br></br>
            <input type="text" placeholder="Please Select " value={props.form.featuredPackage} onChange={(e)=>props.setform({...props.form,featuredPackage:e.target.value})}/>
            </div>
            <div>
            <label >PPD Package</label><br></br>
            <input type="text" placeholder="Please Select" value={props.form.ppdPackage} onChange={(e)=>props.setform({...props.form,ppdPackage:e.target.value})}/>
            </div>
            
            
                    
        </form>
    )
}
export default General;