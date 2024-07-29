export interface Appointment {
    id: string;
    doctorId: string;
    doctorFirstName: string; 
    doctorLastName: string; 
    patientId: string;
    patientFirstName: string; 
    patientLastName: string; 
    appointmentDateTime: string;
    status: string;
    reason: string;
    details: string;
}
