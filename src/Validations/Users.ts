import { isRequired, isInteger } from "@Utils/validationRules";
import { isRequiredText, isIntegerText } from "@Utils/errorsHelper";

// USERS
export const createUserValidationMap = {
    body: {
        firstName: {
            methods: {
                required: isRequired,
            },
            messages: {
                required: isRequiredText,
            }
        },
        lastName: {
            methods: {
                required: isRequired,
            },
            messages: {
                required: isRequiredText,
            }
        },
        email: {
            methods: {
                required: isRequired,
            },
            messages: {
                required: isRequiredText,
            }
        },
        phone: {
            methods: {
                required: isRequired,
            },
            messages: {
                required: isRequiredText,
            }
        },
    }
};
export const getUsersValidationMap = {
    query: {
        count: {
            methods: {
                required: isRequired,
                isInteger
            },
            messages: {
                required: isRequiredText,
                isInteger: isIntegerText
            }
        },
        page: {
            methods: {
                required: isRequired,
                isInteger
            },
            messages: {
                required: isRequiredText,
                isInteger: isIntegerText
            }
        }
    },
};

// USER/:id
export const getUserValidationMap = {
    params: {
        id: {
            methods: {
                required: isRequired,
                isInteger
            },
            messages: {
                required: isRequiredText,
                isInteger: isIntegerText
            }
        },
    },
};
export const deleteUserValidationMap = {
    params: {
        id: {
            methods: {
                required: isRequired,
                isInteger
            },
            messages: {
                required: isRequiredText,
                isInteger: isIntegerText
            }
        },
    },
};
export const updateUserValidationMap = {
    body: {
        firstName: {
            methods: {
                required: isRequired,
            },
            messages: {
                required: isRequiredText,
            }
        },
        lastName: {
            methods: {
                required: isRequired,
            },
            messages: {
                required: isRequiredText,
            }
        },
        email: {
            methods: {
                required: isRequired,
            },
            messages: {
                required: isRequiredText,
            }
        },
        phone: {
            methods: {
                required: isRequired,
            },
            messages: {
                required: isRequiredText,
            }
        },
        roleId: {
            methods: {
                required: isRequired,
                isInteger
            },
            messages: {
                required: isRequiredText,
                isInteger: isIntegerText
            }
        }
    },
    params: {
        id: {
            methods: {
                required: isRequired,
                isInteger
            },
            messages: {
                required: isRequiredText,
                isInteger: isIntegerText
            }
        },
    },
};




