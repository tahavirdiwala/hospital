const validate = {
  phoneNumber: {
    validator: (value) => {
      return /^([0-9]{10}$)/.test(value);
    },
    message: (props) => `${props.value} should be exactly 10 digits long`,
  },
};

module.exports = validate;
