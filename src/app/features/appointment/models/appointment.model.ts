export interface Appointment {
    id: string;
    doctorid: string;
    patientid: string;
    appointmentdatetime: Date;
    status: string;
    reason: string;
}