`timescale 1ns/1ps

module smartbus_tb;

    reg clk;
    reg reset;
    reg book;
    reg release_seat;
    reg [2:0] seat_id;

    wire [7:0] seats;
    wire [3:0] occupied;
    wire [3:0] available;
    wire bus_full;
    wire bus_available;

    smartbus uut(
        .clk(clk),
        .reset(reset),
        .book(book),
        .release_seat(release_seat),
        .seat_id(seat_id),
        .seats(seats),
        .occupied(occupied),
        .available(available),
        .bus_full(bus_full),
        .bus_available(bus_available)
    );

    always #5 clk = ~clk;

    initial begin
        clk = 0;
        reset = 1;
        book = 0;
        release_seat = 0;
        seat_id = 0;

        $dumpfile("smartbus.vcd");
        $dumpvars(0, smartbus_tb);

        $monitor(
            "Time=%0t Seats=%b Occupied=%0d Available=%0d Full=%b BusAvailable=%b",
            $time, seats, occupied, available, bus_full, bus_available
        );

        #10 reset = 0;

        #10 book = 1;
        seat_id = 0;

        #10 seat_id = 1;
        #10 seat_id = 2;
        #10 seat_id = 3;
        #10 seat_id = 4;
        #10 seat_id = 5;
        #10 seat_id = 6;
        #10 seat_id = 7;

        #10 book = 0;

        $display("All seats booked. Full=%b", bus_full);

        #10 release_seat = 1;
        seat_id = 3;

        #10 release_seat = 0;

        $display("Seat released. Occupied=%0d Available=%0d",
                 occupied, available);

        #10 reset = 1;

        #10 reset = 0;

        #10 $display("Simulation Completed Successfully");

        $finish;
    end

endmodule
