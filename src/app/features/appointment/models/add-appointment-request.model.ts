export interface AddAppointmentRequest{
    doctorid: string;
    patientid: string;
    appointmentdatetime: Date;
    status: string;
    reason: string;
}