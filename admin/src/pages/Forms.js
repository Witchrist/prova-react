import React from 'react'

import FormHeading from '../components/micro/ComponentHeading'
import Form from '../components/macro/Form/Form'
import Input from '../components/micro/Form/Input'
import Checkbox from '../components/micro/Form/Checkbox'
import Button from '../components/micro/button/Button'
import FormRow from '../components/macro/Form/FormRow'
import Select from '../components/micro/Form/Select'

function Comp(props) {

    return(
        <>
        <FormHeading header="Forms"></FormHeading>
        <Form>
        <Input label="inputEmail"
                    name="Email"
                    type="email"
                    describedby="emailHelp"
                    placeholder="Insira seu email">
        </Input>
        <Input label="inputPassWord"
                name="Senha"
                type="password"
                placeholder="Insira sua senha">
        </Input>
        <Checkbox/>
        <Button text="Enviar"></Button>
        </Form>
        <Form>
            <FormRow>
                <Input label="inputEmail"
                            name="Email"
                            type="email"
                            placeholder="Insira seu email"
                            column={6}>
                </Input>
                <Input label="inputPassWord"
                        name="Senha"
                        type="password"
                        placeholder="Insira sua senha"
                        column={6}>
                </Input>
            </FormRow>
            <Input label="inputAddress"
                        name="Endereço"
                        type="text"
                        placeholder="Ex: Av. Honório 675">
            </Input>
            <Input label="inputAddress2"
                        name="Endereço 2"
                        type="text"
                        placeholder="Ex: apartamento ou casa">
            </Input>
            <FormRow>
            <Input label="inputCity"
                            name="Cidade"
                            type="text"
                            column={6}>
                </Input>
                <Select label="selectState"
                            name="Estado"
                            column={4}>
                </Select>
            </FormRow>

        <Checkbox/>
        <Button text="Enviar"></Button>
        </Form>
        </>
    )
}

export default Comp