import { describe, expect, it } from 'vitest';
import { MIN_INSTALLS_TO_SHOW, installsToShow } from '../../src/lib/wporg';

describe('installsToShow', () => {
	it('hides install counts below the threshold', () => {
		expect(installsToShow(0)).toBeNull();
		expect(installsToShow(MIN_INSTALLS_TO_SHOW - 1)).toBeNull();
	});

	it('shows install counts at or above the threshold', () => {
		expect(installsToShow(MIN_INSTALLS_TO_SHOW)).toBe(MIN_INSTALLS_TO_SHOW);
		expect(installsToShow(2000)).toBe(2000);
	});
});
