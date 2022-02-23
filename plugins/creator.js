const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Trito;;;'
                    + 'FN:Trito\n' // full name
                    + 'ORG:Owner LolitaBot;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285888258313:+6285888258313\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'King Of Bear', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
