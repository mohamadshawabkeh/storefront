import { connect } from 'react-redux';
import { setActiveCategory } from '../../store/categories/index';
import './categories.scss';

const Categories = ({ categories, setActiveCategory }) => {
  const handleCategoryClick = (category) => {
    setActiveCategory(category); 
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = {
  setActiveCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
