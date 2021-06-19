CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
      })

  ).isRequired,
}
