import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);


// export const getFilteredContacts = state => {        //example without memoization
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };