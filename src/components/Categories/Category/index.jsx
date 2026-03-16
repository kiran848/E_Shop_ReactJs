const Category =(props)=>{
    const{id,name,image}=props.data;
    return (
  <div class="col-md-3 mb-4">
    <div class="card h-100">
        <img src={image}  class = "card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }}/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
       
       
        <a href="#" class="btn btn-primary">Select</a>
      </div>
    </div>
  </div>
    )
}
export default Category;
