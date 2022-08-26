export default {
    name: "footerMain",
    title: "FooterMain",
    description: "This describes makemaker on the footer",
    type: "document",
    fields: [
        {
            name: "logo",
            title: 'Logo',
            type: "image",
            options: {hotspot: true},
        },
        {
            name: "message",
            title: "Description",
            type: "text"
        }
    ]
}