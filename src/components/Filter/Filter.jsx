import React from 'react';
import css from './Filter.module.css';

export class Filter extends React.Component {
  render() {
    const { changeFilter, filterState } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          className={css.inputFilter}
          type="text"
          onChange={event => changeFilter(event)}
          value={filterState}
        />
      </label>
    );
  }
}
