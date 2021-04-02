let drafts = [];
while (drafts.length < 1)
    drafts.push({ check: false, star: false });

let inbox = [];
while (inbox.length < 30)
    inbox.push({ check: false, star: false });

let sent = [];
while (sent.length < 5)
    sent.push({ check: false, star: false });

export default {
    data() {
        return {
            drafts,
            inbox,
            sent,
            important: [],
            snoozed: [],
            spam: [],
            emails: [],
            check: false,
        }
    },
    watch: {
        check() {
            this.checkAll();
        },
    },
    mounted() {
        ui();
    },
    methods: {
        checkAll() {
            for (var i = 0; i < this.emails.length; i++)
                this.emails[i].check = this.check;
        },
        check(email) {
            email.check = !email.check;
        },
        star(email) {
            email.star = !email.star;
        },
    },
}