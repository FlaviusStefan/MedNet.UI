export interface UpdateAppointmentRequest {
    doctorId: string;
    patientId: string;
    appointmentDateTime: string;
    status: string;
    reason: string;
}