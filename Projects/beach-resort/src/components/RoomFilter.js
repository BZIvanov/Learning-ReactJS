import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import * as actions from '../store/actions/filters';

const RoomFilter = ({ filters, onSetFilters }) => {
  const {
    type,
    types,
    selectedCapacity,
    capacities,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = filters;

  const renderTypes = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  const renderCapacities = capacities.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    onSetFilters({ [name]: value });
  };

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="selectedType"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {renderTypes}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="selectedCapacity"
            id="capacity"
            value={selectedCapacity}
            className="form-control"
            onChange={handleChange}
          >
            {renderCapacities}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = ({ filters }) => ({
  filters,
});

const mapDispatchToProps = (dispatch) => ({
  onSetFilters: (filter) => dispatch(actions.setFilters(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomFilter);
