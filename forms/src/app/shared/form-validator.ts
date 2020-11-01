export class FormVadidator{
    static getErrorMsg(fielName:string, validatorName:string, validatorValue?:any){
        const config = {
            'required' : `${fielName} é Obrigatorio.`,
            'minlength' : `${fielName} precisa ter no minimo ${validatorValue.requiredLength} caracteres.`,
            'maxlength' : `${fielName} precisa ter no maximo ${validatorValue.requiredLength} caracteres.`,
            'cepInvalido' : "CEP Invalido"
        }
        return config[validatorName];
    }
}