const initialState = {
  user: {},
  page: {
    isDialogActive: false,
    isError: false,
    dialog: {
      isActive: false,
      message: '',
    },
    error: {
      isActive: false,
      message: '',
    },
    isLoading: false,
  },
};

export default initialState;
