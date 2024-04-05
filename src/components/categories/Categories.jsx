import "./categories.css"
import Category from '../category/Category'
import { categoryData } from "../../dummyData"
const Categories = () => {
  return (
      <div className='catWraper'>
          {categoryData.map((item) => (
            
              <Category item={item} />
        ))}
    </div>
  )
}

export default Categories