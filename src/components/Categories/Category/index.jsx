const Category =(props)=>{
    const{_id,name,image}=props.data;
    return (
  <div className="col-md-3 mb-4">
    <div className="card h-100">
        <img src={image}  class = "card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }}/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
       
       
        <button  className="btn btn-primary"
        onClick={()=>props.openCategory(_id)}>Select</button>
      </div>
    </div>
  </div>
    )
}
export default Category;
