import {BeginPage} from './BeginPage';
import { concat } from 'rxjs';

export class ClientInput {
    beginPage: BeginPage = new BeginPage();

    TotalAnnualApplicationSupport: string;
    CurrentOnpremiseApplication: string;
    CurrentOnpremiseApplicationVersion: string;
    CurrentOnpremiseApplicationDetail: string;
    TotalNumberofFinancialUsers: string;
    annualCosttomaintainthephysicalhardware: string;
    NumberofBusinessFTEs: number;
    NumberofITorTechnologyDeveloperFTEs: string;
    NumberofSystemAdminDBAFTEs: string;
    NumberofConsultantsContractors: string;
    sporadicallyhireconsultantscontractors: string;
    TotalconsultantContractorcostperyear: string;
    annualspend: string;
    annualhostingfee: string;
    NumberofCountriesinScope: string;
    ApplicationUpgrade1Date: Date;
    ApplicationUpgrade2Date: Date;
    Upgrade1Cost: number;
    Upgrade2Cost: number;
    TotalNumberofPhysicalServers: Int16Array;
    Financials: string;
    InfrastructureUpgrade1Cost: Int16Array;
    InfrastructureUpgrade2Cost: Int32Array;
    InfrastructureUpgrade1Date: Date;
    InfrastructureUpgrade2Date: Date;

    public getCurrentOnpremiseApplicationDetail() {
        return concat(this.CurrentOnpremiseApplication, this.Financials);
    }

    public primaryLocation() {

        if (this.beginPage.clientName == null) {
            return 'Primary Location (HQ State)';
        } else {
            return concat(this.beginPage.clientName, '\'s', ' Primary Location (HQ State)');
        }
    }

    public getOnPermisesCostString() {
    if (this.beginPage.customerName != null) {
        return concat('Section B: ' , this.beginPage.customerName, '\'s',  'On-Premise Costs');
    } else {
        concat('Section B: ' ,  ' On-Premise Costs');
    }
    }

    public getFinicialUpgrade1CostString() {
    if (this.beginPage.customerName != null) {
        return concat(this.beginPage.customerName, '\'s', this.CurrentOnpremiseApplication ,  'On-Premise Costs');

    } else {
        return concat('Financial Upgrade Costs');
    }
    }

    public getFinicialUpgrade2CostString() {
    if (this.beginPage.customerName != null) {
        return concat(this.beginPage.customerName, '\'s', this.CurrentOnpremiseApplication ,  'Last 2 Upgrade Costs');
    } else {
        return concat('Financial Upgrade Costs');
    }
    }
}
