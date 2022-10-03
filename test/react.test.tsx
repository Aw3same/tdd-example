
import { render } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'

function Calculator() {
    
}

describe('Calculator', (): void => {
    it('should be rendered', (): void => {
        render(<Calculator />)
    })
})