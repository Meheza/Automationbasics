var automationbasics = {}
module.exports = {
    beforeEach: browser => {
        automationbasics = browser.page.automationbasicspage()
            automationbasics
                .navigate()
        
        },
        after: browser => {
            automationbasics
                .end()
        },
        'Even Test' : browser => {
            automationbasics
            .waitForElementVisible('@button')
            .setValue('@inputline', ['548', browser.Keys.ENTER])
            .verify.valueContains('@inputline','548')
            .click('@button')
            .waitForElementVisible('@evenfield', '548')
            .pause(5000)
        },
        'Odd Test' : browser => {
            automationbasics
            .waitForElementVisible('@button')
            .setValue('@inputline', ['961', browser.Keys.ENTER])
            .verify.valueContains('@inputline', '961')
            .click('@button')
            .waitForElementVisible('@oddfield', '961')
            .pause(5000)
        },
        'Palindrome Test': browser => {
            automationbasics
            .waitForElementVisible('@palindrombutton')
            .setValue('@palindrome', ['sagas', browser.Keys.ENTER])
            .verify.valueContains('@palindrome', 'sagas')
            .click('@palindrombutton')
            .waitForElementVisible('@palidromfield', 'Palindrome: true')
            .pause(5000)
        },
        'Sum Test': browser => {
            automationbasics
            .waitForElementVisible('@suminput')
            .setValue('@suminput', ['1', browser.Keys.ENTER])
            .verify.valueContains('@suminput', '1')
            .setValue('@suminputb', ['7', browser.Keys.ENTER])
            .verify.valueContains('@suminputb', '7')
            .click('@sumbutton')
            .waitForElementVisible('@sumb', '8')
            .pause(5000)
        },
}

