export interface AddAppointmentRequest{
    doctorid: string;
    patientid: string;
    datetime: Date;
    reason: string;
}