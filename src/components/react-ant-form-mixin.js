import classNames from 'classnames';
import { Alert, Form, Input } from 'antd';

export default class {

  get formData() {
    return this.state.formData;
  }

  generateForm(inFields, inFormLayout) {
    const { formData } = this.state;

    return inFields.map((item, index) => {
      const { field, label, required, tips, disabled, hidden } = item;
      const Component = item.component || Input;

      return (
        !hidden && (
          <Form.Item
            className={classNames('react-ant-form-mixin-item', { 'disabled': disabled })}
            key={index}
            required={required}
            label={label}
            {...inFormLayout}
          >
            {tips && <Alert message={tips} className={'mb10'} showIcon type="info" />}
            {
              <Component
                value={formData[field]}
                onChange={this.onChangeToState.bind(this, `formData.${field}`)}
                {...item.props}
              />
            }
          </Form.Item>
        )
      );
    })
  }

}
