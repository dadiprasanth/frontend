const Basic=(props)=>{
    return(
        <form>
            <div>
            <label >Proprty Type</label><br></br>
            <input type="text" placeholder="Select Proprty Type" value={props.form.propertyType} onChange={(e)=>props.setform({...props.form,propertyType:e.target.value})}/>
            </div>
            <div>
            <label >Negotable</label><br></br>
            <input type="text" placeholder="Select Negotable " value={props.form.negotable} onChange={(e)=>props.setform({...props.form,negotable:e.target.value})}/>
            </div>
            <div>
            <label >Price</label><br></br>
            <input type="text" placeholder="Example: 10000 " value={props.form.price} onChange={(e)=>props.setform({...props.form,price:e.target.value})}/>
            </div>
            <div>
            <label >Ownership</label><br></br>
            <input type="text" placeholder="Select Ownership " value={props.form.ownerShip} onChange={(e)=>props.setform({...props.form,ownerShip:e.target.value})}/>
            </div>
            <div>
            <label >Property Age</label><br></br>
            <input type="text" placeholder="Select Property Age " value={props.form.propertyAge} onChange={(e)=>props.setform({...props.form,propertyAge:e.target.value})}/>
            </div>
            <div>
            <label >Property Approved</label><br></br>
            <input type="text" placeholder="Property Approved" value={props.form.propertyApproved} onChange={(e)=>props.setform({...props.form,propertyApproved:e.target.value})}/>
            </div>
            <div>
            <label >Property Description</label><br></br>
            <input type="text" placeholder="" value={props.form.propertyDescription} onChange={(e)=>props.setform({...props.form,propertyDescription:e.target.value})}/>
            </div>
            <div>
            <label >Bank Loan</label><br></br>
            <input type="text" placeholder="Bank Loan" value={props.form.bankLoan} onChange={(e)=>props.setform({...props.form,bankLoan:e.target.value})}/>
            </div>
            
                    
        </form>
    )
}
export default Basic;