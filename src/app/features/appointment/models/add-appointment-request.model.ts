export interface AddAppointmentRequest{
    doctorId: string;
    patientId: string;
    appointmentDateTime: Date;
    status: string;
    reason: string;
    details: string;
}