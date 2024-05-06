export interface AddAppointmentRequest{
    doctorid: string;
    patientid: string;
    datetime: Date;
    status: string;
    reason: string;
}