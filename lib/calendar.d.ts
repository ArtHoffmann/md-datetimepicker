/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterContentInit, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { MdDateFormats } from '@angular/material';
import { MdDatetimepickerIntl } from './datetimepicker-intl';
import { TimepickerAttrs } from './timepicker-attrs';
import { DateAdapter } from './native-date-module/index';
/**
 * A calendar that is used as part of the datetimepicker.
 * @docs-private
 */
export declare class MdCalendar<D> implements AfterContentInit {
    private _elementRef;
    private _intl;
    private _ngZone;
    _isCompatibilityMode: boolean;
    private _dateAdapter;
    private _dateFormats;
    pickerAttrs: EventEmitter<TimepickerAttrs>;
    /** A date representing the period (month or year) to start the calendar in. */
    startAt: D;
    /** Whether the calendar should be started in month or year view. */
    startView: 'month' | 'year';
    /** The currently selected date. */
    selected: D;
    /** The minimum selectable date. */
    minDate: D;
    /** The maximum selectable date. */
    maxDate: D;
    /** A function used to filter which dates are selectable. */
    dateFilter: (date: D) => boolean;
    /** Show or hide the time view */
    timepickerAttrs: TimepickerAttrs;
    private _timepickerAttrs;
    /** Date filter for the month and year views. */
    _dateFilterForViews: (date: D) => boolean;
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    _activeDate: D;
    private _clampedActiveDate;
    /** Whether the calendar is in month view. */
    _monthView: boolean;
    /** The label for the current calendar view. */
    readonly _periodButtonText: string;
    readonly _periodButtonLabel: string;
    /** The label for the the previous button. */
    readonly _prevButtonLabel: string;
    /** The label for the the next button. */
    readonly _nextButtonLabel: string;
    /** The label for the the hours increase button. */
    readonly _increaseHoursButtonLabel: string;
    /** The label for th hours decrease button. */
    readonly _decreaseHoursButtonLabel: string;
    /** The label for the minutes increase button. */
    readonly _increaseMinutesButtonLabel: string;
    /** The label for the minutes increase button. */
    readonly _idecreaseMinutesButtonLabel: string;
    /** The label for displaying AM or PM */
    readonly _ampmButtonLabel: string;
    constructor(_elementRef: ElementRef, _intl: MdDatetimepickerIntl, _ngZone: NgZone, _isCompatibilityMode: boolean, _dateAdapter: DateAdapter<D>, _dateFormats: MdDateFormats);
    ngAfterContentInit(): void;
    /** Handles month selection in the year view. */
    _monthSelected(month: D): void;
    /** Handles user clicks on the period label. */
    _currentPeriodClicked(): void;
    /** Handles user clicks on the previous button. */
    _previousClicked(): void;
    /** Handles user clicks on the next button. */
    _nextClicked(): void;
    /** Whether the previous period button is enabled. */
    _previousEnabled(): boolean;
    /** Whether the next period button is enabled. */
    _nextEnabled(): boolean;
    /** Handles keydown events on the calendar body. */
    _handleCalendarBodyKeydown(event: KeyboardEvent): void;
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(): void;
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    private _isSameView(date1, date2);
    /** Handles keydown events on the calendar body when calendar is in month view. */
    private _handleCalendarBodyKeydownInMonthView(event);
    /** Handles keydown events on the calendar body when calendar is in year view. */
    private _handleCalendarBodyKeydownInYearView(event);
    /**
     * Determine the date for the month that comes before the given month in the same column in the
     * calendar table.
     */
    private _prevMonthInSameCol(date);
    /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     */
    private _nextMonthInSameCol(date);
    /** Emits when the currently selected date changes. */
    selectedChange: EventEmitter<D>;
    closeDialog: EventEmitter<boolean>;
    _closeDialog(): void;
    /** Handles date selection in the month view. */
    _dateSelected(date: D): void;
    _timeSelected(date: D): void;
    /** Handles date selection in the month view. */
    _dateComplete(): void;
}
