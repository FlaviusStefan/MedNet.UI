export interface Appointment {
    id: string;
    doctorId: string;
    patientId: string;
    appointmentDateTime: string;
    status: string;
    reason: string;
}