import {ClientInput} from './ClientInput';

export class JDAInput {
    clientInput: ClientInput;

    SumJDA;

    amount = [0, 0, 0, 0, 0];

    public getCurrentOnPermiseApplcatinDetail() {
        return this.clientInput.CurrentOnpremiseApplication;
    }
}
