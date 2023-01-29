import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

export type OptionsType = {
    id: number,
    value: string
}

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: OptionsType[]
    onChangeOption?: (option: number) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        return onChangeOption && onChangeOption(+e.target.value);
        // делают студенты
    }

    const finalRadioClassName = s.radio + (className ? '' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      type={'radio'}
                      value={o.id}
                      checked={o.id === value}
                      name={'Junior'}
                      // name, checked, value делают студенты
                      onChange={onChangeCallback}
                      {...restProps}
                  />
                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
