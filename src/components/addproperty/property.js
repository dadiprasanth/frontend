const Property=(props)=>{
    return(
        <form className="form-addprop">
        <div>
        <label >Length</label><br></br>
        <input type="text" placeholder="Example: 10000" value={props.form.length} onChange={(e)=>props.setform({...props.form,length:e.target.value})}/>
        </div>
        <div>
        <label >Breath</label><br></br>
        <input type="text" placeholder="Example: 10000" value={props.form.breath} onChange={(e)=>props.setform({...props.form,breath:e.target.value})}/>
        </div>
        <div>
        <label >Toatal Area</label><br></br>
        <input type="text" placeholder="Example: 7500 " value={props.form.toatalArea} onChange={(e)=>props.setform({...props.form,toatalArea:e.target.value})}/>
        </div>
        <div>
        <label >Area Unit</label><br></br>
        <input type="text" placeholder="Area Unit" value={props.form.areaUnit} onChange={(e)=>props.setform({...props.form,areaUnit:e.target.value})}/>
        </div>
        <div>
        <label >No of BHK</label><br></br>
        <input type="text" placeholder="Select No of BHK " value={props.form.noOfBhk} onChange={(e)=>props.setform({...props.form,noOfBhk:e.target.value})}/>
        </div>
        <div>
        <label >No of floor</label><br></br>
        <input type="text" placeholder="Select No of Floor" value={props.form.noOfFloor} onChange={(e)=>props.setform({...props.form,noOfFloor:e.target.value})}/>
        </div>
        <div>
        <label >Attached</label><br></br>
        <input type="text" placeholder="Select Attached" value={props.form.attached} onChange={(e)=>props.setform({...props.form,attached:e.target.value})}/>
        </div>
        <div>
        <label >Western Toilet</label><br></br>
        <input type="text" placeholder="select Western Toilet" value={props.form.westernToilet} onChange={(e)=>props.setform({...props.form,westernToilet:e.target.value})}/>
        </div>
        <div>
        <label >Furnished</label><br></br>
        <input type="text" placeholder="Select Furnished " value={props.form.furnished} onChange={(e)=>props.setform({...props.form,furnished:e.target.value})}/>
        </div>
        <div>
        <label >Car Parking</label><br></br>
        <input type="text" placeholder="Select Car Parking " value={props.form.carParking} onChange={(e)=>props.setform({...props.form,carParking:e.target.value})}/>
        </div>
        <div>
        <label >Lift</label><br></br>
        <input type="text" placeholder="Select Lift" value={props.form.lift} onChange={(e)=>props.setform({...props.form,lift:e.target.value})}/>
        </div>
        <div>
        <label >Electricity</label><br></br>
        <input type="text" placeholder="Example:3 Phase" value={props.form.electricity} onChange={(e)=>props.setform({...props.form,electricity:e.target.value})}/>
        </div>
        <div>
        <label >Facing</label><br></br>
        <input type="text" placeholder="select Facing" value={props.form.facing} onChange={(e)=>props.setform({...props.form,facing:e.target.value})}/>
        </div>
        
        
                
    </form>
    )

}
export default Property;
