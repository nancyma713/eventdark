export const createRegistration = (registration) => (
    $.ajax({
        method: "POST",
        url: `api/registrations`,
        data: registration
    })
)

export const deleteRegistration = (registrationId) => (
    $.ajax({
        method: "DELETE",
        url: `api/registrations/${registrationId}`
    })
)