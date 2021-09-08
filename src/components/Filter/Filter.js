import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts';
import './Filter.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className="contact-filter">
      Find contacts by name
      <input
        type="text"
        className="contact-filter__input"
        value={value}
        onChange={event => dispatch(changeFilter(event.currentTarget.value))} />
    </label>
  );
};

export default Filter;




// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: (event) => dispatch(actions.changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);