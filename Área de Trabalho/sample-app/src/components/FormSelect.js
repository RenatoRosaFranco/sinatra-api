import React from 'react';

class FormSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'coco'
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
		}
		
		handleChange(event) {
			let fruit = event.target.value;
			this.setState({value: fruit});
		}

		handleSubmit(event) {
			alert('Seu sabor favorito é' + this.state.value);
			event.preventDefault();
			return false
		}

    render() {
			let selectedFruit = function(){
				if (this.state.value == "") {
					return <p>Nenhuma fruta selecionada</p>
				}
				else {
					return <p>{ this.state.value }</p>
				}
			}

			return(
            <form onSubmit={this.handleSubmit}>
                <label>Escolha seu sabor favorito</label><br />
                <select required='required' 
												value={this.state.value} 
												onChange={this.handleChange}>
									  <option value="">Selecionar</option>
                    <option value="laranja">Laranja</option>
                    <option value="limão">Limão</option>
                    <option value="coco">Coco</option>
                    <option value="manga">magna</option>
                </select><br />
                <input type="submit" value="Enviar" />

								<div className={'field'}>
									{ this.state.value }
									{ selectedFruit }
								</div>
						</form>
        )
    }
}

export default FormSelect;