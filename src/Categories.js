function CategoriesLayout({ onCategoryChange }) {
  const categories = [
    "Initiation",
    "Planning",
    "Execution",
    "Closing",
    "Agile principles and mindset",
    "Monitoring and controlling",
    "Agile Methodology",
    "Agile Ceremonies",
    "Servant Leadership",
    "Agile Tools & Techniques",
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {categories.map((item, index) => {
        return (
          <div
            className="card bg-base-100 shadow-sm cursor-pointer hover:bg-gray-50"
            onClick={() => onCategoryChange(item)}
          >
            <div className="p-4 card-body">
              <h2 className="card-title">{item}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesLayout;
