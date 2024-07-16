import { emailTemplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01-template.ts', () => {
    test('emailTemplate should contain a greetin', () => {{
        expect(emailTemplate).toContain('Hi, ')
    }});

    test('emailTemplate should contain {{name}} and {{orderId}}', () => {{
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
    }});

});