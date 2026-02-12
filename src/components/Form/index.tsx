import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';
import styles from './Form.module.css';

interface FormContextType {
  layout: 'horizontal' | 'vertical' | 'inline';
  disabled: boolean;
  validateMessages: Record<string, string>;
  registerField: (name: string, field: FormField) => void;
  unregisterField: (name: string) => void;
  getFieldValue: (name: string) => any;
  setFieldValue: (name: string, value: any) => void;
  getFieldError: (name: string) => string;
  setFieldError: (name: string, error: string) => void;
  validateFields: () => Promise<Record<string, any>>;
  resetFields: () => void;
}

interface FormField {
  name: string;
  value: any;
  errors: string[];
  validate: () => Promise<boolean>;
  reset: () => void;
}

const FormContext = createContext<FormContextType | null>(null);

interface FormProps {
  layout?: 'horizontal' | 'vertical' | 'inline';
  disabled?: boolean;
  onFinish?: (values: Record<string, any>) => void;
  onFinishFailed?: (errors: Record<string, string[]>) => void;
  validateMessages?: Record<string, string>;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

interface FormComponent extends React.FC<FormProps> {
  Item: React.FC<FormItemProps>;
  Control: React.FC<FormControlProps>;
  useForm: typeof useForm;
}

export const Form: FormComponent = ({
  layout = 'vertical',
  disabled = false,
  onFinish,
  onFinishFailed,
  validateMessages = {
    required: '${label} is required',
    whitespace: '${label} cannot be empty',
  },
  className = '',
  style = {},
  children,
}) => {
  const [fields, setFields] = useState<Record<string, FormField>>({});
  const formRef = useRef<HTMLFormElement>(null);

  // 注册字段
  const registerField = (name: string, field: FormField) => {
    setFields((prev) => ({
      ...prev,
      [name]: field,
    }));
  };

  // 取消注册字段
  const unregisterField = (name: string) => {
    setFields((prev) => {
      const newFields = { ...prev };
      delete newFields[name];
      return newFields;
    });
  };

  // 获取字段值
  const getFieldValue = (name: string) => {
    return fields[name]?.value;
  };

  // 设置字段值
  const setFieldValue = (name: string, value: any) => {
    setFields((prev) => {
      if (prev[name]) {
        return {
          ...prev,
          [name]: {
            ...prev[name],
            value,
          },
        };
      }
      return prev;
    });
  };

  // 获取字段错误
  const getFieldError = (name: string) => {
    return fields[name]?.errors[0] || '';
  };

  // 设置字段错误
  const setFieldError = (name: string, error: string) => {
    setFields((prev) => {
      if (prev[name]) {
        return {
          ...prev,
          [name]: {
            ...prev[name],
            errors: error ? [error] : [],
          },
        };
      }
      return prev;
    });
  };

  // 验证字段
  const validateFields = async () => {
    const errors: Record<string, string[]> = {};
    const values: Record<string, any> = {};

    for (const [name, field] of Object.entries(fields)) {
      const isValid = await field.validate();
      if (!isValid) {
        errors[name] = field.errors;
      }
      values[name] = field.value;
    }

    if (Object.keys(errors).length === 0) {
      if (onFinish) {
        onFinish(values);
      }
      return values;
    } else {
      if (onFinishFailed) {
        onFinishFailed(errors);
      }
      throw errors;
    }
  };

  // 重置字段
  const resetFields = () => {
    for (const field of Object.values(fields)) {
      field.reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await validateFields();
  };

  const contextValue: FormContextType = {
    layout,
    disabled,
    validateMessages,
    registerField,
    unregisterField,
    getFieldValue,
    setFieldValue,
    getFieldError,
    setFieldError,
    validateFields,
    resetFields,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form
        ref={formRef}
        className={`${styles.form} ${className}`}
        style={style}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

interface FormItemProps {
  label?: string;
  name?: string;
  required?: boolean;
  help?: string;
  validateStatus?: 'success' | 'warning' | 'error' | 'validating';
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export const FormItem: React.FC<FormItemProps> = ({
  label,
  name,
  required = false,
  help,
  className = '',
  style = {},
  children,
}) => {
  const context = useContext(FormContext);
  const [value, setValue] = useState<any>(undefined);
  const [errors, setErrors] = useState<string[]>([]);

  // 注册字段到表单上下文
  React.useEffect(() => {
    if (name && context) {
      const field: FormField = {
        name,
        value,
        errors,
        validate: async () => {
          // 简单验证：必填
          if (required && !value) {
            const errorMessage = context.validateMessages.required.replace(
              '${label}',
              label || name,
            );
            setErrors([errorMessage]);
            return false;
          }
          setErrors([]);
          return true;
        },
        reset: () => {
          setValue(undefined);
          setErrors([]);
        },
      };

      context.registerField(name, field);

      return () => {
        context.unregisterField(name);
      };
    }
  }, [name, context, label, required]);

  // 当值变化时，更新字段状态
  React.useEffect(() => {
    if (name && context) {
      context.setFieldValue(name, value);
    }
  }, [value, name, context]);

  // 渲染表单布局
  const renderLayout = () => {
    const formItemClassName = `${styles.formItem} ${className}`;
    const hasError = errors.length > 0;
    const errorMessage = hasError ? errors[0] : '';

    if (context?.layout === 'horizontal') {
      return (
        <div
          className={`${formItemClassName} ${styles.formLayoutHorizontal}`}
          style={style}
        >
          <label className={styles.formItemLabel}>
            {required && <span className={styles.formItemRequired}>*</span>}
            {label}
          </label>
          <div className={styles.formItemContent}>
            {children}
            {errorMessage && (
              <div className={styles.formItemError}>{errorMessage}</div>
            )}
            {!errorMessage && help && (
              <div className={styles.formItemHelp}>{help}</div>
            )}
          </div>
        </div>
      );
    }

    if (context?.layout === 'inline') {
      return (
        <div
          className={`${formItemClassName} ${styles.formLayoutInline}`}
          style={style}
        >
          <label className={styles.formItemLabel}>
            {required && <span className={styles.formItemRequired}>*</span>}
            {label}
          </label>
          <div className={styles.formItemContent}>
            {children}
            {errorMessage && (
              <div className={styles.formItemError}>{errorMessage}</div>
            )}
            {!errorMessage && help && (
              <div className={styles.formItemHelp}>{help}</div>
            )}
          </div>
        </div>
      );
    }

    // 默认垂直布局
    return (
      <div className={formItemClassName} style={style}>
        {label && (
          <label className={styles.formItemLabel}>
            {required && <span className={styles.formItemRequired}>*</span>}
            {label}
          </label>
        )}
        <div className={styles.formItemContent}>
          {children}
          {errorMessage && (
            <div className={styles.formItemError}>{errorMessage}</div>
          )}
          {!errorMessage && help && (
            <div className={styles.formItemHelp}>{help}</div>
          )}
        </div>
      </div>
    );
  };

  return renderLayout();
};

// 提供一个 Hook 用于在自定义组件中访问表单上下文
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a Form component');
  }
  return context;
};

// 提供一个包装组件，用于将普通输入组件与表单集成
interface FormControlProps {
  name: string;
  children: React.ReactElement;
}

export const FormControl: React.FC<FormControlProps> = ({ name, children }) => {
  const context = useContext(FormContext);
  const [value, setValue] = useState<any>(context?.getFieldValue(name));

  React.useEffect(() => {
    if (context) {
      const fieldValue = context.getFieldValue(name);
      if (fieldValue !== value) {
        setValue(fieldValue);
      }
    }
  }, [context, name]);

  const handleChange = (e: any) => {
    const newValue = e.target?.value !== undefined ? e.target.value : e;
    setValue(newValue);
    if (context) {
      context.setFieldValue(name, newValue);
    }
  };

  if (!React.isValidElement(children)) {
    return <>{children}</>;
  }

  return React.cloneElement(children as React.ReactElement<any>, {
    value,
    onChange: handleChange,
    disabled: context?.disabled,
  });
};

Form.Item = FormItem;
Form.Control = FormControl;
Form.useForm = useForm;

export default Form;
