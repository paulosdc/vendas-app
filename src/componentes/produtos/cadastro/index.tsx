import { Layout, Input } from 'componentes'
import { useState } from 'react'

export const CadastroProdutos: React.FC = () => {
    const [codigo, setCodigo] = useState<string>('')
    const [preco, setPreco] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')

    const submit = () => {
        const produto = {
            codigo, preco, nome, descricao
        }
        console.log(produto)
    }
    return (
        <Layout titulo="Cadastro de Produtos">
            <div className='columns'>
                <Input label="Código" onChange={setCodigo} id="inputCodigo" placeholder='Digite o código do produto' value={codigo} />
                <Input label="Preço" onChange={setPreco} columnClasses="is-one-quarter" id="inputPreco" placeholder='Digite o preço do produto' value={preco} />
            </div>

            <div className='columns'>
                <Input label="Nome" onChange={setNome} id="inputNome" placeholder='Digite o nome do produto' value={nome} />
            </div>
            
            <div className="field">
                <label htmlFor="inputDescricao" className="label"> Descrição </label>
                <div className="control">
                    <textarea className="textarea" placeholder="Digite a descrição do produto" id="inputDescricao" value={descricao} onChange={event => setDescricao(event.target.value)} />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button onClick={submit} className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}