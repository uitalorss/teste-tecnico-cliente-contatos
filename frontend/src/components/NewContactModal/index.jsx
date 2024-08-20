import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./styles"
import { useForm } from "react-hook-form";
import { DefaultButton } from "../../global";


export const NewContactModal = () => {
    const { register, handleSubmit } = useForm();

    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div>
                    <h2>Novo Contato</h2>
                    <input type="text" placeholder="Nome" {...register("name")} />
                    <input type="text" placeholder="E-mail" {...register("email")} />
                    <input type="text" placeholder="Telefone" {...register("phone")} />
                    <DefaultButton onClick={() => handleSubmit()()}>
                        Adicionar
                    </DefaultButton>
                </div> 
            </Content>
        </Dialog.Portal>
    )
}